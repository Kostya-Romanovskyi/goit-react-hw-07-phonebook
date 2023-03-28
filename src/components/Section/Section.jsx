import PropTypes from 'prop-types';
import { SubSection } from './Section.styled'

function Section({ subTitle, children }) {
    return (
        <SubSection>
            <h2>{subTitle}</h2>
            {children}
        </SubSection>
    );
}

Section.propTypes = {
    subTitle: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section;