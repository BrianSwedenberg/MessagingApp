// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { supabase } from '../../lib/supabase'; // adjust path if you're in (tabs)

// type Message = {
//   id: string;
//   text: string;
//   created_at: string;
// };

// export default function HomeScreen() {
//   const [messages, setMessages] = useState<Message[]>([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const { data, error } = await supabase
//         .from<'messages', Message>('messages')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (error) console.error('Error fetching messages:', error.message);
//       else setMessages(data || []);
//     };

//     fetchMessages();
//   }, []);

//   return (
//     <View style={{ padding: 20, paddingTop: 60 }}>
//       <Text style={{ fontSize: 24, marginBottom: 16 }}>Messages</Text>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={{ fontSize: 16, marginBottom: 12 }}>{item.text}</Text>
//         )}
//       />
//     </View>
//   );
// }

import { View, Text } from 'react-native';

export default function TabsHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Hello from Tabs</Text>
    </View>
  );
}