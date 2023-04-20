import { ScrollView, Text, View } from 'react-native'
import { Avatar } from 'rn-ui-kit'

export default function AvatarScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Variants</Text>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
          />
          <Avatar
            variant='rounded'
            source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }}
          />
          <Avatar
            variant='square'
            source={{ uri: 'https://mui.com/static/images/avatar/3.jpg' }}
          />
        </View>
      </View>

      <View>
        <Text>Sizes</Text>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            size='sm'
            source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
          />
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }}
          />
          <Avatar
            size='lg'
            source={{ uri: 'https://mui.com/static/images/avatar/3.jpg' }}
          />
          <Avatar
            size={56}
            source={{ uri: 'https://mui.com/static/images/avatar/4.jpg' }}
          />
        </View>
      </View>

      <View>
        <Text>Letters</Text>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            alt='John Doe'
          />
          <Avatar
            alt='Doe John'
            style={{ backgroundColor: '#4f46e5' }}
          />
        </View>
      </View>

      <View>
        <Text>Fallbacks</Text>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/broken-image.jpg' }}
            alt='John Doe'
          />
          <Avatar
            source={{ uri: 'https://mui.com/static/images/avatar/broken-image.jpg' }}
          />
        </View>
      </View>
    </ScrollView>
  )
}