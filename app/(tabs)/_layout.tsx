import { Redirect } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useSession } from '@/context/Authentication';
import AuthCheck from '@/components/AuthCheck';

export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <AuthCheck />
  }

  if (!session) {
    return <Redirect href="/(auth)/index" />;
  }

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{default: "person", selected: "person.fill"}} md="person" />
        <NativeTabs.Trigger.Badge>1</NativeTabs.Trigger.Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
