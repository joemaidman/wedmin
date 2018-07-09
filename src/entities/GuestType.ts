import { registerEnumType } from 'type-graphql';

enum GuestType {
  DAY = 'Day',
  NIGHT = 'Night'
}

registerEnumType(GuestType, {
  name: 'GuestType'
});

export default GuestType;
