import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
import Button from "react-native-button";

export default class PDFList_New extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      FlatListItems: [
        { key: "1", value: "2016%20HIAB%20Booklet%20V2%20Print" },
        {
          key: "2",
          value: "2019BestSTEMBooks%20HIAB"
        },
        {
          key: "3",
          value: "Climate%20booklet%20HIAB"
        },

        {
          key: "4",
          value: "HIAB-afterschoolprograms"
        },
        {
          key: "5",
          value: "HIAB%20beginners%20DT%20guide"
        },
        {
          key: "6",
          value: "HIAB%20IgniteSTEM%20robotics%20guide"
        },
        {
          key: "7",
          value: "HIABprofessionaldevelopment"
        },
        {
          key: "8",
          value: "The-Teacher-50-sample-chapters"
        }
      ]
	};
	
  }
  _handlePress() {
    console.log("Pressed!");
  }
  render() {
    let width = Dimensions.get("window").width / 2;
    let height = Dimensions.get("window").height / 3;
    return (
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20
        }}
      >
        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => {
            console.log(state.get.key("1").value);
            this.props.navigation.navigate("PDFViewer_Render", {
              pdfName: state.get.key("1").value
            });
          }}
        >
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/HIAB_2016.png")}
          />
          {/* Press Me! */}
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/STEM_Books.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/climate.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/afterschoolPrograms.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/designThinking.png")}
          />
          {/* Press Me! */}
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/robotics.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 20
            }}
            source={require("../images/personalDevelopmentTeachers.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
        >
          {/* Press Me! */}
          <Image
            style={{
              width: width,
              height: height,
              backgroundColor: "powderblue",
              marginTop: 20,
              marginBottom: 100
            }}
            source={require("../images/teacherGuide.png")}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
