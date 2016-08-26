'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

const Card = ({name, price, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{uri: image}} />
      <Text style={styles.text}>This is card {name}</Text>
      <Text style={styles.price}>This is card {price}</Text>
    </View>
  );
};

const cards = [
  {name: 'HEMNES', price: '$139.00', image: 'http://www.ikea.com/PIAimages/0104033_PE250684_S3.JPG'},
  {name: 'HEMNES', price: '$139.00', image: 'http://www.ikea.com/PIAimages/0255104_PE399040_S3.JPG'},
  {name: 'RISSNA', price: '$149.00', image: 'http://www.ikea.com/PIAimages/0367772_PE549603_S3.JPG'},
  {name: 'RISSNA', price: '$179.00', image: 'http://www.ikea.com/PIAimages/0367768_PE549602_S3.JPG'},
  {name: 'LISABO', price: '$129.00', image: 'http://www.ikea.com/PIAimages/0326094_PE518131_S3.JPG'},
  {name: 'MALMSTA', price: '$179.00', image: 'http://www.ikea.com/PIAimages/0246298_PE385395_S3.JPG'},
  {name: 'LACK', price: '$44.99', image: 'http://www.ikea.com/PIAimages/18869_PE104062_S3.JPG'},
  {name: 'LISABO', price: '$99.00', image: 'http://www.ikea.com/PIAimages/0326096_PE518132_S3.JPG'},
  {name: 'LACK', price: '$24.99', image: 'http://www.ikea.com/PIAimages/57540_PE163122_S3.JPG'},
  {name: 'LIATORP', price: '$279.00', image: 'http://www.ikea.com/PIAimages/0242769_PE382032_S3.JPG'},
  {name: 'SINNERLIG', price: '$99.99', image: 'http://www.ikea.com/PIAimages/0374119_PE552478_S3.JPG'},
  {name: 'SINNERLIG', price: '$99.99', image: 'http://www.ikea.com/PIAimages/0374118_PE552477_S3.JPG'},
];

const handleYup = (card) => {
    console.log(`Yup for ${card.text}`)
  };

  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`)
  };

export default () => {

  

  return (
    <SwipeCards
      cards={cards}

      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}

      handleYup={handleYup}
      handleNope={handleNope}
    />
  );
  

};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  price: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})