import { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

function ShowCreator() {
    const [creatorData, setCreatorData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCreators = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')

            if (error) { console.error('Supabase error:', error); }
            if (data) setCreatorData(data);
            setLoading(false);
        }
        getCreators().catch(console.error);
    }, []);

    return (
        <div className='ShowCreator'>
            {loading
                ? <h3>Loading creators...</h3>
                : creatorData.length > 0
                    ? creatorData.map((creator) => (
                        <Card
                            key={creator.id}
                            creatorId={creator.id}
                            name={creator.name}
                            url={creator.url}
                            imageURL={creator.imageURL}
                            description={creator.description}
                        />
                    ))
                    : <h3>Oops! No creators yet. Add your favorite creators 🙂</h3>
            }
        </div>
    )
}

export default ShowCreator
