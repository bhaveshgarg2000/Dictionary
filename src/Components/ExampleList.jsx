import PropTypes from 'prop-types';

const ExampleList = ({ meanings }) => {
    // Check if `meanings` is undefined or not an array
    if (!meanings) {
        return <p>No examples available.</p>;
    }

    return (
        <>
            <div className=''>
                {meanings.map((meaning, index) => (
                    <div key={index}>
                        {meaning.definitions.map((definition, definitionIndex) => (
                            <div key={definitionIndex}>
                                {definition.example && <p>{definition.example}</p>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>


        </>
    );
};

ExampleList.propTypes = {
    meanings: PropTypes.arrayOf(PropTypes.shape({
        definitions: PropTypes.arrayOf(PropTypes.shape({
            example: PropTypes.string
        }))
    }))
};

export default ExampleList;
