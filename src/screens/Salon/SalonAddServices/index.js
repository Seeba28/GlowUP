import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { images } from '../../../services/utilities/images';
import { styles } from './style';
import BackArrow from '../../../components/BackArrow';
import Button from '../../../components/Button';

export default function SalonAddService({navigation}) {
    const [servicesData, setserviceData] = useState([
        {
            serviceImage: images.HairCutService,
            serviceName: 'Haircuts',
            serviceStyles: '5',
        },
        {
            serviceImage: images.FacialService,
            serviceName: 'Facial',
            serviceStyles: '5',
        },
        {
            serviceImage: images.HeenaService,
            serviceName: 'Heena',
            serviceStyles: '5',
        },
        {
            serviceImage: images.NailService,
            serviceName: 'Nails',
            serviceStyles: '5',
        },
        
    ]);
  


  
  const [selectedItem, setSelecteditem] = useState(null);

  const handleTagPress = tag => {
    setSelecteditem(tag === selectedItem ? null : tag);
  };

   
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backArrow}>
          <BackArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.centerHeader}>
          <Text style={styles.headerText}>Add Services</Text>
          <Text style={styles.subText}>
            Choose from the options below to set up the services offered at your
            barber shop
          </Text>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.services}>
            {servicesData.map((tag, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.serviceImagecontainer,
                  selectedItem === tag
                    ? styles.selectedServiceimagecontainer
                    : null,
                ]}
                onPress={() => handleTagPress(tag)}>
                <Image
                  source={tag.serviceImage}
                  style={styles.serviceImageresize}
                  resizeMode="contain"
                />
                <Text style={styles.serviceTexts}>{tag.serviceName}</Text>
                {/* <Text style={styles.serviceTexts}>{tag.serviceText}</Text> */}
              </TouchableOpacity>
            ))}
          </View>
          
        </View>
        <View style={styles.nextBtn}>
            <Button
              title={'Next'}
              onPress={() => navigation.navigate('SalonAddServiceInfo')}
            />
          </View>
      </View>
    </SafeAreaView>
  );
}
