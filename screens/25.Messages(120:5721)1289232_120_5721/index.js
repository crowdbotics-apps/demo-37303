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
      <View style={styles.View_120_5722} />
      <View style={styles.View_120_5723} />
      <View style={styles.View_120_5724} />
      <View style={styles.View_120_5725} />
      <View style={styles.View_120_5726} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b9ec7ef-4ad3-4c9c-9b75-51992a7ccf26"
        }}
        style={styles.ImageBackground_120_5727}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/421b536e-00bc-4161-9df4-30047f0a9f4b"
        }}
        style={styles.ImageBackground_120_5728}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e45caf5-1d43-4365-a5d9-8fdc95c1f010"
        }}
        style={styles.ImageBackground_120_5729}
      />
      <View style={styles.View_120_5730}>
        <View style={styles.View_I120_5730_39_1844}>
          <View style={styles.View_I120_5730_39_1845} />
        </View>
      </View>
      <View style={styles.View_120_5731}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b25e629a-93ca-420e-9019-f3490c25bc6f"
          }}
          style={styles.ImageBackground_I120_5731_200_987}
        />
        <View style={styles.View_I120_5731_200_992}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/225d72df-1d59-408f-b7bd-8af0530506ae"
            }}
            style={styles.ImageBackground_I120_5731_200_993}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf86abdc-af15-4627-b3be-cbba1ce11389"
            }}
            style={styles.ImageBackground_I120_5731_200_997}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42b2a5d5-bc93-489a-aaab-60c34c923c4b"
            }}
            style={styles.ImageBackground_I120_5731_200_1001}
          />
        </View>
        <View style={styles.View_I120_5731_205_36868}>
          <View style={styles.View_I120_5731_205_36869}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7be9e36-268b-4456-8f08-6dd5b6d2b6f1"
              }}
              style={styles.ImageBackground_I120_5731_205_36870}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_120_5732}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d474893-fabd-4827-bf30-7e0d56019dd3"
          }}
          style={styles.ImageBackground_I120_5732_200_987}
        />
        <View style={styles.View_I120_5732_200_992}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11e65f65-f34b-4fb1-bfca-1193738d9617"
            }}
            style={styles.ImageBackground_I120_5732_200_993}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8977ec01-0507-4129-9636-5fc2a8d8c214"
            }}
            style={styles.ImageBackground_I120_5732_200_997}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2aec7f3-1a2d-4e5a-a28d-856535dd7ed9"
            }}
            style={styles.ImageBackground_I120_5732_200_1001}
          />
        </View>
        <View style={styles.View_I120_5732_205_36868}>
          <View style={styles.View_I120_5732_205_36869}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0aff117-b593-4170-903b-62290fc068f6"
              }}
              style={styles.ImageBackground_I120_5732_205_36870}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_120_5733}>
        <View style={styles.View_120_5734}>
          <View style={styles.View_120_5736}>
            <Text style={styles.Text_120_5736}>Messages</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_120_5737}>
        <Text style={styles.Text_120_5737}>Conversations</Text>
      </View>
      <View style={styles.View_120_5738}>
        <Text style={styles.Text_120_5738}>11:42 a.m.</Text>
      </View>
      <View style={styles.View_120_5739}>
        <Text style={styles.Text_120_5739}>Fri 12:42 a.m.</Text>
      </View>
      <View style={styles.View_120_5740}>
        <Text style={styles.Text_120_5740}>Fri 12:42 a.m.</Text>
      </View>
      <View style={styles.View_120_5741}>
        <Text style={styles.Text_120_5741}>Sat 10:23 a.m.</Text>
      </View>
      <View style={styles.View_120_5742}>
        <Text style={styles.Text_120_5742}>Thu 11:42 a.m.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50a6dff7-8115-4bd1-bc6c-cd94ab79a389"
        }}
        style={styles.ImageBackground_120_5743}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8763fae-a8da-45e1-aa37-d64d1a8a608f"
        }}
        style={styles.ImageBackground_120_5744}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e57adb0-1ced-40d7-adfa-5e6420dc6464"
        }}
        style={styles.ImageBackground_120_5745}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d420f080-8005-4579-a481-b4aecb866c29"
        }}
        style={styles.ImageBackground_120_5746}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2eed93e-c13b-463a-9b78-c7524a822822"
        }}
        style={styles.ImageBackground_120_5747}
      />
      <View style={styles.View_120_5748}>
        <Text style={styles.Text_120_5748}>Wanda Olsen</Text>
      </View>
      <View style={styles.View_120_5749}>
        <Text style={styles.Text_120_5749}>Jennifer Hudson</Text>
      </View>
      <View style={styles.View_120_5750}>
        <Text style={styles.Text_120_5750}>Hamlet production</Text>
      </View>
      <View style={styles.View_120_5751}>
        <Text style={styles.Text_120_5751}>Kevin Anderson</Text>
      </View>
      <View style={styles.View_120_5752}>
        <Text style={styles.Text_120_5752}>Fernando Lopez</Text>
      </View>
      <View style={styles.View_120_5753}>
        <View style={styles.View_120_5754} />
        <View style={styles.View_120_5755}>
          <Text style={styles.Text_120_5755}>Search message</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca7db2cd-105e-4c1a-897c-63071baa603a"
        }}
        style={styles.ImageBackground_120_5756}
      />
      <View style={styles.View_288_11085}>
        <Text style={styles.Text_288_11085}>At what time do we meet?...</Text>
      </View>
      <View style={styles.View_288_11086}>
        <Text style={styles.Text_288_11086}>See you at the production...</Text>
      </View>
      <View style={styles.View_288_11087}>
        <Text style={styles.Text_288_11087}>See you at the production...</Text>
      </View>
      <View style={styles.View_288_11088}>
        <Text style={styles.Text_288_11088}>See you at the production...</Text>
      </View>
      <View style={styles.View_288_11089}>
        <Text style={styles.Text_288_11089}>See you at the production...</Text>
      </View>
      <View style={styles.View_293_13241}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c1eef52-02af-4eba-8b95-3f9e874e237e"
          }}
          style={styles.ImageBackground_293_13240}
        />
        <View style={styles.View_293_13239}>
          <Text style={styles.Text_293_13239}>4</Text>
        </View>
      </View>
      <View style={styles.View_293_13242}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f34dea62-a959-445e-b174-39c7717fc425"
          }}
          style={styles.ImageBackground_293_13243}
        />
        <View style={styles.View_293_13244}>
          <Text style={styles.Text_293_13244}>2</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_120_5722: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 246, 222, 1)"
  },
  View_120_5723: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    backgroundColor: "rgba(255, 246, 222, 1)"
  },
  View_120_5724: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_120_5725: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_120_5726: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_120_5727: {
    width: wp("165%"),
    height: hp("55%"),
    top: hp("-16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%")
  },
  ImageBackground_120_5728: {
    width: wp("165%"),
    height: hp("55%"),
    top: hp("-18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%")
  },
  ImageBackground_120_5729: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_120_5730: {
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
  View_I120_5730_39_1844: {
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
  View_I120_5730_39_1845: {
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
  View_120_5731: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I120_5731_200_987: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I120_5731_200_992: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I120_5731_200_993: {
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
  ImageBackground_I120_5731_200_997: {
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
  ImageBackground_I120_5731_200_1001: {
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
  View_I120_5731_205_36868: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_I120_5731_205_36869: {
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
  ImageBackground_I120_5731_205_36870: {
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
  View_120_5732: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I120_5732_200_987: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I120_5732_200_992: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I120_5732_200_993: {
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
  ImageBackground_I120_5732_200_997: {
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
  ImageBackground_I120_5732_200_1001: {
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
  View_I120_5732_205_36868: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_I120_5732_205_36869: {
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
  ImageBackground_I120_5732_205_36870: {
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
  View_120_5733: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_120_5734: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_120_5736: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_120_5736: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.028000000417232516,
    textTransform: "none"
  },
  View_120_5737: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_120_5737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5738: {
    width: wp("16%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_120_5738: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_5739: {
    width: wp("22%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_120_5739: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_5740: {
    width: wp("22%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_120_5740: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_5741: {
    width: wp("23%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    justifyContent: "flex-start"
  },
  Text_120_5741: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_5742: {
    width: wp("23%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_120_5742: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_5743: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_120_5744: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_120_5745: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_120_5746: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_120_5747: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_120_5748: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_120_5748: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5749: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_120_5749: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5750: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_120_5750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5751: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_120_5751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5752: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_120_5752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04000000059604645,
    textTransform: "none"
  },
  View_120_5753: {
    width: wp("87%"),
    height: hp("8%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_120_5754: {
    width: wp("87%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(226, 226, 226, 1)",
    borderWidth: 1
  },
  View_120_5755: {
    width: wp("39%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_120_5755: {
    color: "rgba(115, 142, 174, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  ImageBackground_120_5756: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_288_11085: {
    width: wp("47%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_288_11085: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_288_11086: {
    width: wp("47%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_288_11086: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_288_11087: {
    width: wp("47%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_288_11087: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_288_11088: {
    width: wp("47%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_288_11088: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_288_11089: {
    width: wp("47%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_288_11089: {
    color: "rgba(0, 31, 71, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_293_13241: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("40%")
  },
  ImageBackground_293_13240: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_293_13239: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_293_13239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03000000044703484,
    textTransform: "none"
  },
  View_293_13242: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("50%")
  },
  ImageBackground_293_13243: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_293_13244: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_293_13244: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03000000044703484,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
