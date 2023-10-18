import { SectionComponent, Title } from "./Section.styled"

export const Section = ({ title, children }) => {
    return (
        <SectionComponent>
            <Title>{title}</Title>
            {children}
        </SectionComponent>
    )
}