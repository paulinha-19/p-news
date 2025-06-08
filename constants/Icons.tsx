import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export const icons = [
  { key: 'general', label: 'Geral', iconComponent: Ionicons, iconName: 'newspaper-outline' },
  { key: 'world', label: 'Mundo', iconComponent: Entypo, iconName: 'globe' },
  { key: 'nation', label: 'Política', iconComponent: Ionicons, iconName: 'business' },
  { key: 'business', label: 'Economia', iconComponent: FontAwesome5, iconName: 'dollar-sign' },
  { key: 'technology', label: 'Tecnologia', iconComponent: FontAwesome5, iconName: 'microchip' },
  { key: 'entertainment', label: 'Entretenimento', iconComponent: Ionicons, iconName: 'film-outline' },
  { key: 'sports', label: 'Esportes', iconComponent: Ionicons, iconName: 'football-outline' },
  { key: 'science', label: 'Ciência', iconComponent: MaterialIcons, iconName: 'science' },
  { key: 'health', label: 'Saúde', iconComponent: FontAwesome5, iconName: 'heartbeat' },
];
