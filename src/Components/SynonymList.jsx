import PropTypes from 'prop-types';

const SynonymList = ({ mean }) => {
    return (
        <div>
            {mean && mean.map((val, index) => (
                <div key={index}>
                    {val.meanings && val.meanings.map((means, index2) => (
                        <ul key={index2}>
                            {means.synonyms && means.synonyms.map((synonym, index3) => (
                                <li key={index3}>{synonym}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

SynonymList.propTypes = {
    mean: PropTypes.arrayOf(
        PropTypes.shape({
            meanings: PropTypes.arrayOf(
                PropTypes.shape({
                    synonyms: PropTypes.arrayOf(
                        PropTypes.string.isRequired
                    ).isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired
};

export default SynonymList;
