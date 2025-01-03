import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';

const BottomSheetModal = () => {
  const [open, setOpen] = useState(false);
  const screenHeight = Dimensions.get('screen').height;
  const translateY = new Animated.Value(screenHeight);

  const showModal = () => {
    setOpen(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(translateY, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setOpen(false));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 100) {
        hideModal();
      } else {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* Open Modal Button */}
      <TouchableOpacity style={styles.openButton} onPress={showModal}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={open} transparent animationType="none">
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.overlay} onPress={hideModal} />
          <Animated.View
            style={[
              styles.bottomSheet,
              { transform: [{ translateY }] },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.modalTitle}>Custom Bottom Sheet</Text>
            <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  openButton: {
    backgroundColor: 'purple',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: Dimensions.get('screen').height * 0.4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
