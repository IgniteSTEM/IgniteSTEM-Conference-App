import React from "react";
import { StyleSheet, View } from "react-native";
import PDFReader from "rn-pdf-reader-js";

export default class PDFViewer_Render extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.navigation.state.params.pdfName);
  }
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            // uri: "https://drive.google.com/file/d/1McZ14R77i6jjhgjFDiIVz4OkHz43Uvie/view" // google drive uri
            // uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf" // working uri
            uri:
              "http://ignitestem.org/assets/pdf/Hack-In-A-Box/" +
              this.props.navigation.state.params.pdfName +
              ".pdf" // dynamic pdf name
            // uri:"http://ignitestem.org/assets/pdf/Hack-In-A-Box/2016%20HIAB%20Booklet%20V2%20Print.pdf"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  }
});
