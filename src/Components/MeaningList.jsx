import PropTypes from 'prop-types';

const MeaningList = ({ mean }) => {
    return (
        <div>
            {mean && mean.map((val, index) => (
                <div key={index}>
                    {val.meanings && val.meanings.map((means, index2) => (
                        <ul key={index2}>
                            {means.definitions && means.definitions.map((def, index3) => (
                                <li key={index3}>{def.definition}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

MeaningList.propTypes = {
    mean: PropTypes.arrayOf(
        PropTypes.shape({
            meanings: PropTypes.arrayOf(
                PropTypes.shape({
                    definitions: PropTypes.arrayOf(
                        PropTypes.shape({
                            definition: PropTypes.string.isRequired
                        })
                    ).isRequired
                })
            ).isRequired
        })
    ).isRequired
};

export default MeaningList;
