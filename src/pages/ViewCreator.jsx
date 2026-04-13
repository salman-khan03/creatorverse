import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client';

function ViewCreator() {
    const [creator, setCreator] = useState({ name: "", url: "", imageURL: "", description: "" });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select()
                .eq('id', id);

            if (error) { console.error(error); }
            if (data && data.length > 0) setCreator(data[0]);
            setLoading(false);
        }
        getCreator().catch(console.error);
    }, [id])

    const deleteCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) { console.error('Error deleting creator:', error); return; }
        navigate("/");
    }

    if (loading) return <h3>Loading creator...</h3>;

    return (
        <div className="ViewCreator">
            <section className="creator-image">
                {creator.imageURL && (
                    <img src={creator.imageURL} alt={creator.name} />
                )}
            </section>

            <section className="creator-info">
                <h2>{creator.name}</h2>
                {creator.url && (
                    <a href={creator.url} target="_blank" rel="noreferrer">{creator.url}</a>
                )}
                <p>{creator.description}</p>
            </section>

            <nav className="modify-creator">
                <ul>
                    <li>
                        <Link to={'/edit/' + id}>
                            <button role='button'>Edit</button>
                        </Link>
                    </li>
                    <li>
                        <button role='button' className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ViewCreator
