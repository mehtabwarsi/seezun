import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {icons} from 'lucide-react-native';

type IconName = keyof typeof icons;

export type TabItem = {
  icon: IconName;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedItem: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

// icons
type IconProp = {
  name: IconName;
};

const Icon = ({name}: IconProp) => {
  const IconComponent = icons[name];
  return <IconComponent />;
};

const AnimatedTab = ({
  data,
  onChange,
  selectedItem,
  activeBackgroundColor,
  inactiveBackgroundColor,
  activeColor,
  inactiveColor,
}: TabsProps) => {
  return (
    <View>
      {data.map((item, index) => {
        return (
          <View>
            <Text>{item.label}</Text>
            <Icon name={item.icon} />
          </View>
        );
      })}
    </View>
  );
};

export default AnimatedTab;

const styles = StyleSheet.create({});
