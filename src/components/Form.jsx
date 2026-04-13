function CreatorForm({ creator, setCreator }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    };

    return (
        <div>
            <form id="CreatorForm">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={creator.name || ""} onChange={handleChange} required />

                <label htmlFor="url">URL</label>
                <small>Link to the creator&apos;s channel or page. Include the https://</small>
                <input type="text" id="url" name="url" value={creator.url || ""} onChange={handleChange} required />

                <label htmlFor="image">Image URL</label>
                <small>Link to an image of the creator. Include the https://</small>
                <input type="text" id="image" name="imageURL" value={creator.imageURL || ""} onChange={handleChange} />

                <label htmlFor="description">Description</label>
                <small>Provide a description of the creator</small>
                <textarea rows="3" id="description" name="description" value={creator.description || ""} onChange={handleChange} required></textarea>
            </form>
        </div>
    );
}

export default CreatorForm;
