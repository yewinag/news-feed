import styled from 'styled-components'

export const Dropdown = () => {
  return (
    <>
      <StyledSelect>
        <option>A</option>
        <option>b</option>
      </StyledSelect>
      <div>aokasdf</div>
    </>
  )
}
const StyledSelect = styled.select`
  color: ${(p) => p.theme.colors.primary};
`
