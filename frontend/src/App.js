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
    this.state = { 
      heroData1: [],
      heroData2: [],
      heroData3: [],
      heroData4: [],
      heroData5: [],
      heroData6: [],
      heroData7: [],
      heroData8: [],
      heroData9: [],
      heroData10: []
    };
  }

  componentDidMount(){
    this.fetchData(1);
  }

  fetchData(tier){
      const url = "http://localhost:3001/hero/" + tier;
      return fetch(url)
              .then( (response) => {
                console.log(response);
                return response.json() })
                .then( (json) => {
                  console.log(typeof(json));
                  this.setState({heroData1: json[0]});
                  this.setState({heroData2: json[1]});
                  this.setState({heroData3: json[2]});
                  this.setState({heroData4: json[3]});
                  this.setState({heroData5: json[4]});
                  this.setState({heroData6: json[5]});
                  this.setState({heroData7: json[6]});
                  this.setState({heroData8: json[7]});
                  this.setState({heroData9: json[8]});
                  this.setState({heroData10: json[9]});
                });
              }

          // .then((response) => response.json())
          // .then(response => {
          //   console.log(response);
          //   this.setState({ heroData1: response});
          // }).catch(error => console.log("Error happened, code : " + error));
          // .then(response => console.log(response[0].name))
          
  // }

  render() {
    return (
      <div className="App">
     <StyledRoot>
       <StyledContainer>
         <Card
          imgsource = {"//api.opendota.com"+this.state.heroData1.image}
          title = {this.state.heroData1.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData2.image}
          title = {this.state.heroData2.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData3.image}
          title = {this.state.heroData3.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData4.image}
          title = {this.state.heroData4.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData5.image}
          title = {this.state.heroData5.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData6.image}
          title = {this.state.heroData6.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData7.image}
          title = {this.state.heroData7.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData8.image}
          title = {this.state.heroData8.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData9.image}
          title = {this.state.heroData9.name}
        />
        <Card
          imgsource = {"//api.opendota.com"+this.state.heroData10.image}
          title = {this.state.heroData10.name}
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