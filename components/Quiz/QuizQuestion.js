import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";


export default class QuizQuestion extends React.Component {
  render() {
    let image = this.props.source;
    let quiz = this.props.quiz;
    let question = this.props.question;

    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'left',backgroundColor: "white",padding:15, paddingTop:5}}>
        <Image
          source={image}
          style={{width:250,height:250}}
          resizeMode={"contain"}
        />
          <Text style={{ fontSize: 24, color: "#889770", paddingTop: 20}}>
            {quiz.questions[question].question}
          </Text>
      </View>
    );
  }
}
