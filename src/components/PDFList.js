import React from "react";
//import react in our code.
import {
  Dimensions,
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
//import all the components we are going to use.

const width = Dimensions.get("window").width / 2;
const height = Dimensions.get("window").height / 3;

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
    // the list of pdfs with value as uri in website
    this.state = {
      FlatListItems: [ 
        {
          key: "NYC Conference 2019",
          value: "xNYC_2019_ConferenceBooklet",
          image: require("../images/nyc2019.png")
        },
        {
          key: "HIAB Booklet",
          value: "2016%20HIAB%20Booklet%20V2%20Print",
          image: require("../images/HIAB_2016.png")
        },
        {
          key: "Best STEM Books 2019",
          value: "2019BestSTEMBooks%20HIAB",
          image: require("../images/STEM_Books.png")
        },
        {
          key: "Climate HIAB Booklet",
          value: "Climate%20booklet%20HIAB",
          image: require("../images/climate.png")
        },

        {
          key: "HIAB After School Programs",
          value: "HIAB-afterschoolprograms",
          image: require("../images/afterschoolPrograms.png")
        },
        {
          key: "Guide to Design Thinking",
          value: "HIAB%20beginners%20DT%20guide",
          image: require("../images/designThinking.png")
        },
        {
          key: "Robotics Guide",
          value: "HIAB%20IgniteSTEM%20robotics%20guide",
          image: require("../images/robotics.png")
        },
        {
          key: "HIAB Professional Development",
          value: "HIABprofessionaldevelopment",
          image: require("../images/personalDevelopmentTeachers.png")
        },
        {
          key: "50 ?s for Classroom Excellence",
          value: "The-Teacher-50-sample-chapters",
          image: require("../images/teacherGuide.png")
        }
      ]
    };
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  GetItem(item) {
    //Function for click on an item
    Alert.alert(item);
  }

  render() {
    return (
      <FlatList
        data={this.state.FlatListItems}
        //data defined in constructor
        ItemSeparatorComponent={this.FlatListItemSeparator}
        //Item Separator View
        renderItem={({ item }) => (
          // Single Comes here which will be repeatative for the FlatListItems
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              styleDisabled={{ color: "red" }}
              onPress={() => {
                console.log(item.value);
                this.props.navigation.navigate("PDFViewer_Render", {
                  pdfName: item.value
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
                source={item.image}
              />
              {/* Press Me! */}
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },

  item: {
    width: width,
    height: height,
    backgroundColor: "powderblue",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  }
});
