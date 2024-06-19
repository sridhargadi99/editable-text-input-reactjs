import {Component} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  Container1,
  InputElement,
  ButtonElement,
  Content,
} from './styledComponents'

class EditableText extends Component {
  state = {
    searchInput: '',
    buttonContent: false,
  }

  onChangeButtonContent = () => {
    const {buttonContent} = this.state
    this.setState({buttonContent: !buttonContent})
  }

  addContent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, buttonContent} = this.state
    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <Container1>
            {buttonContent ? (
              <Content>{searchInput}</Content>
            ) : (
              <InputElement
                value={searchInput}
                type="text"
                onChange={this.addContent}
              />
            )}
            <ButtonElement type="button" onClick={this.onChangeButtonContent}>
              {buttonContent ? 'Edit' : 'Save'}
            </ButtonElement>
          </Container1>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default EditableText
