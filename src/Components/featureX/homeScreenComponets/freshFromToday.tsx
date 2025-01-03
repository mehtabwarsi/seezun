import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

type Props = {
  image: string;
};

const FreshFromToday = ({ image }: Props) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    Image.getSize(image, (width, height) =>
      setAspectRatio(width / height)
    );
  }, [image]);


  return (
    <View style={{ padding: 2}}>
        <Image
          source={{ uri: image }}
          style={[styles.img,{aspectRatio:aspectRatio}]}
          resizeMode="cover"
        />
    
    </View>
  );
};

export default FreshFromToday;

const styles = StyleSheet.create({
  img: {
    width:'100%'
  },
});
