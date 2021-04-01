import React from 'react'
import styled from 'styled-components'
// import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from './components/HeroCard'

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: []};
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
      const url = "http://localhost:3001/hero/0";
      return fetch(url)
              .then( (response) => {
                return response.json() })
                .then( (json) => {
                  console.log(json[0].image);
                  this.setState({apiResponse: json[0]});
                });
              }

          // .then((response) => response.json())
          // .then(response => {
          //   console.log(response);
          //   this.setState({ apiResponse: response});
          // }).catch(error => console.log("Error happened, code : " + error));
          // .then(response => console.log(response[0].name))
          
  // };

  render() {
    return (
      <div className="App">
     <StyledRoot>
       <StyledContainer>
         <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.apiResponse.image}
          title = {this.state.apiResponse.name}
        />
        {/* <Card
          title={"The Benefits of Green Apples"}
          date={date}
          description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
          actions={buttons}
        /> */}
      </StyledContainer>
    </StyledRoot>
      </div>
    );
  }
}

// const App = () => {
//   const date = new Date().toLocaleDateString()
//   const onCommentClick = () => alert('You clicked comments')
//   const onLikesClick = () => alert('You clicked comments')
//   const onViewsClick = () => alert('You clicked comments')
//   const buttons = [
//     {
//       label: (
//         <>
//           <FaCommentAlt /> 0 Comments
//         </>
//       ),
//       onClick: onCommentClick,
//     },
//     {
//       label: (
//         <>
//           <FaThumbsUp /> 242 Likes
//         </>
//       ),
//       onClick: onLikesClick,
//     },
//     {
//       label: (
//         <>
//           <FaRegEye /> 187288 Views
//         </>
//       ),
//       onClick: onViewsClick,
//     },
//   ]
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/hero/0")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <StyledRoot>
//       <StyledContainer>
//         <Card
//           title={"Slardar"}
//           date={date}
//           description="Green apples have a high fiber content which helps in increasing the
//       body's metabolism. While consuming an apple, make sure that you're not
//       tossing the peel in the trash. Consuming apple with its peel improves
//       the overall health. Due to its high fiber content, apple helps in
//       detoxification process. It keeps the liver and digestive system away
//       from harmful elements."
//           actions={buttons}
//         />
//         <Card
//           title={"The Benefits of Green Apples"}
//           date={date}
//           description="Green apples have a high fiber content which helps in increasing the
//       body's metabolism. While consuming an apple, make sure that you're not
//       tossing the peel in the trash. Consuming apple with its peel improves
//       the overall health. Due to its high fiber content, apple helps in
//       detoxification process. It keeps the liver and digestive system away
//       from harmful elements."
//           actions={buttons}
//         />
//       </StyledContainer>
//     </StyledRoot>
//   )
// }
export default App