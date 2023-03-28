import PropTypes from 'prop-types';
import { TitleSection, MainTitle } from './SectionTitle.styled'

function SectionTitle({ title, children }) {
    return (
        <TitleSection>
            <MainTitle>{title}</MainTitle>
            {children}
        </TitleSection>
    );
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default SectionTitle;