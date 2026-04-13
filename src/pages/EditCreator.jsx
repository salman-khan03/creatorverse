import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CreatorForm from '../components/Form'
import { supabase } from '../client'

function EditCreator() {
    const [creator, setCreator] = useState({ name: "", url: "", imageURL: "", description: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select()
                .eq('id', id);

            if (error) { console.error(error); return; }
            if (data && data.length > 0) setCreator(data[0]);
        }
        getCreator().catch(console.error);
    }, [id])

    const updateCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, imageURL: creator.imageURL, description: creator.description })
            .eq('id', id);

        if (error) { console.error('Error updating creator:', error); return; }
        navigate("/");
    }

    const deleteCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) { console.error('Error deleting creator:', error); return; }
        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <CreatorForm creator={creator} setCreator={setCreator} />
            <nav>
                <ul>
                    <li>
                        <button onClick={updateCreator}>Submit</button>
                    </li>
                    <li>
                        <button className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default EditCreator
