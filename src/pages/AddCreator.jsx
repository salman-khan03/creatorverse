import { useState } from 'react'
import { useNavigate } from 'react-router';
import Form from '../components/Form';
import { supabase } from '../client';

function AddCreator() {
    const [creator, setCreator] = useState({ name: "", url: "", imageURL: "", description: "" });
    const navigate = useNavigate();

    const insertCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .insert({ name: creator.name, url: creator.url, imageURL: creator.imageURL, description: creator.description });

        if (error) {
            console.error('Error adding creator:', error);
            return;
        }

        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <Form creator={creator} setCreator={setCreator} />
            <nav>
                <ul>
                    <li>
                        <button onClick={insertCreator}>Submit</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AddCreator
