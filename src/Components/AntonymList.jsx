import PropTypes from 'prop-types';

const AntonymList = ({ mean }) => {
    return (
        <div>
            {mean && mean.map((val, index) => (
                <div key={index}>
                    {val.meanings && val.meanings.map((means, index2) => (
                        <ul key={index2}>
                            {means.antonyms && means.antonyms.map((antonym, index3) => (
                                <li key={index3}>{antonym}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

AntonymList.propTypes = {
    mean: PropTypes.arrayOf(
        PropTypes.shape({
            meanings: PropTypes.arrayOf(
                PropTypes.shape({
                    antonyms: PropTypes.arrayOf(
                        PropTypes.string.isRequired
                    ).isRequired
                })
            ).isRequired
        })
    ).isRequired
};

export default AntonymList;
