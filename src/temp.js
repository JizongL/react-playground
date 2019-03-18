render() {
  return <View style={{flex: 1,backgroundColor: "cornflowerblue"}}>
      <View style={{backgroundColor: "chartreuse"}}><Text>Nothing (17px)</Text></View>

      <View style={{flex: 0, backgroundColor: "yellow"}}><Text>flex: 0 (17px)</Text></View>

      <View style={{flex: 0, flexBasis: 10, backgroundColor: "brown"}}><Text>flex: 0, flexBasis: 10 (10px)</Text></View>
      <View style={{flex: 0, flexGrow: 1, backgroundColor: "orange"}}><Text>flex: 0, flexGrow: 1 (97px)</Text></View>
      <View style={{flex: 0, flexShrink: 1, backgroundColor: "tan"}}><Text>flex: 0, flexShrink: 1 (17px)</Text></View>
      <View style={{flex: 0, flexGrow: 1, flexBasis: 10, backgroundColor: "purple"}}><Text>flex: 0, flexGrow: 1, flexBasis: 10 (90px)</Text></View>
      <View style={{flex: 0, flexShrink: 1, flexBasis: 10, backgroundColor: "gray"}}><Text>flex: 0, flexShrink: 1, flexBasis: 10 (10px with 7px hidden below the next element)</Text></View>

      <View style={{flex: 1, backgroundColor: "blue"}}><Text>flex: 1 (80px)</Text></View>

      <View style={{flex: 1, flexBasis: 10, backgroundColor: "cornsilk"}}><Text>flex: 1, flexBasis: 10 (90px)</Text></View>
      <View style={{flex: 1, flexGrow: 1, backgroundColor: "red"}}><Text>flex: 1, flexGrow: 1 (80px)</Text></View>
      <View style={{flex: 1, flexShrink: 1, backgroundColor: "green"}}><Text>flex: 1, flexShrink: 1 (80px)</Text></View>
      <View style={{flex: 1, flexGrow: 1, flexBasis: 10, backgroundColor: "aqua"}}><Text>flex: 1, flexGrow: 1, flexBasis: 10 (90px)</Text></View>
      <View style={{flex: 1, flexShrink: 1, flexBasis: 10, backgroundColor: "pink"}}><Text>flex: 1, flexShrink: 1, flexBasis: 10 (90px)</Text></View>
  </View>;
}