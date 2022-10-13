import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_8022}>
        <Text style={styles.Text_1_8022}>Show Up Terms Privacy Policy</Text>
      </View>
      <View style={styles.View_1_8023}>
        <Text style={styles.Text_1_8023}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
          justo sed risus volutpat pretium. Nulla sed justo accumsan, tempor
          lorem id, fringilla mi. Vestibulum malesuada ante orci, at aliquet
          nulla porttitor at. Praesent tincidunt lectus neque, nec vulputate
          mauris luctus nec. Sed aliquet nunc eget risus mattis fringilla.
          Aenean non dui velit. Sed sed viverra mauris, et commodo nisi. Duis
          ultrices nisl et lacus sollicitudin, in sagittis mi scelerisque. Sed
          in pulvinar velit. Quisque a nibh a dolor bibendum lacinia. Donec non
          aliquam arcu. Aenean blandit, mauris eu volutpat fringilla, neque
          dolor fermentum nisl, eget porta elit lacus quis leo. Vestibulum
          pharetra nunc diam, vitae mollis augue sodales sed. Nulla dictum ipsum
          et eros blandit, a tempor purus lobortis. Vivamus vitae est pharetra,
          semper turpis ultricies, pharetra turpis. Nam non ipsum aliquet,
          convallis augue quis, facilisis neque. Aenean vitae nulla
          sollicitudin, tempor mauris in, auctor turpis. Vestibulum nisi nunc,
          varius nec libero a, tristique molestie sem. Phasellus eget magna
          cursus, euismod turpis eget, tristique risus. Aliquam egestas nisi sed
          magna egestas, eget congue sem fermentum. Sed a eros sit amet erat
          dignissim egestas. Ut eleifend massa dolor, nec ornare erat fermentum
          id. Sed id consectetur velit. Etiam malesuada purus vel eros blandit
          ultricies. Nulla imperdiet lacinia nisl eget lacinia. Cras consequat
          magna eu risus rhoncus luctus. Proin vel turpis porta, condimentum est
          a, bibendum nisi.
        </Text>
      </View>
      <View style={styles.View_1_8028}>
        <View style={styles.View_I1_8028_39_1844}>
          <View style={styles.View_I1_8028_39_1845} />
        </View>
      </View>
      <View style={styles.View_62_4823}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8234312f-436c-4cc6-b860-a4bad55c9ba5"
          }}
          style={styles.ImageBackground_I62_4823_62_4304}
        />
        <View style={styles.View_I62_4823_62_4284}>
          <View style={styles.View_I62_4823_62_4294}>
            <View style={styles.View_I62_4823_62_4301}>
              <View style={styles.View_I62_4823_62_4286}>
                <Text style={styles.Text_I62_4823_62_4286}>Privacy Policy</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I62_4823_62_4153}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a82d0a8-b596-4808-896e-adca43af11ff"
            }}
            style={styles.ImageBackground_I62_4823_62_4153_200_987}
          />
          <View style={styles.View_I62_4823_62_4153_200_992}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a633f74-d004-46a4-a477-19eaec516d63"
              }}
              style={styles.ImageBackground_I62_4823_62_4153_200_993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84402ea4-dafd-4bce-a194-36c1853fd0bd"
              }}
              style={styles.ImageBackground_I62_4823_62_4153_200_997}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3329042f-0d5e-416d-9915-0649c95030f9"
              }}
              style={styles.ImageBackground_I62_4823_62_4153_200_1001}
            />
          </View>
          <View style={styles.View_I62_4823_62_4153_205_36868}>
            <View style={styles.View_I62_4823_62_4153_205_36869}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12598f88-d907-48c4-b486-3e92b105cb63"
                }}
                style={styles.ImageBackground_I62_4823_62_4153_205_36870}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8b866f2-d51c-42aa-ac21-8a02639a526e"
        }}
        style={styles.ImageBackground_62_4877}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_1_8022: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_8022: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8023: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_1_8023: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8028: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("136%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_8028_39_1844: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_8028_39_1845: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_62_4823: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I62_4823_62_4304: {
    flexGrow: 1,
    width: wp("169%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("-18%")
  },
  View_I62_4823_62_4284: {
    flexGrow: 1,
    width: wp("95%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_4823_62_4294: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_4823_62_4301: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_4823_62_4286: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I62_4823_62_4286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_4823_62_4153: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I62_4823_62_4153_200_987: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I62_4823_62_4153_200_992: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I62_4823_62_4153_200_993: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I62_4823_62_4153_200_997: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I62_4823_62_4153_200_1001: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I62_4823_62_4153_205_36868: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_I62_4823_62_4153_205_36869: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I62_4823_62_4153_205_36870: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_62_4877: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
