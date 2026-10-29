import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import Boat from './components/Boat';

class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView>
          <View>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Getaboat - for sale</Text>
            <Boat
                name={"SEA RAY 500 SUNDANCER"}
                description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                poster={require("./img/sea_ray.jpg")}
            />
            <Boat
                name={"FOUR WINNS HORIZON 180"}
                description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                poster={require("./img/four_winns.jpg")}
            />
            <Boat
                name={"FLIPPER 640 ST"}
                description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                poster={require("./img/flipper.jpg")}
            />
            <Boat
                name={"PRINCESS V48"}
                description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                poster={require("./img/princess.jpg")}
            />
            <Boat
                name={"BAYLINER 175 BOWRIDER"}
                description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                poster={require("./img/bayliner.jpg")}

            />
            <Boat
                name={"FAIRLINE TARGA 47"}
                description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                poster={require("./img/fairline.jpg")}
            />
          </View>
        </ScrollView>
    );
  };
}

export default AllBoats;
