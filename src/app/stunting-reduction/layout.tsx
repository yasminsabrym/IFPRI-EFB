import type {Metadata} from 'next';
import ClientLayout from '../client-layout';

export const metadata: Metadata = {
  title: 'Data-Driven Hope',
  description: 'Interactive Touchscreen Exhibition',
};

export default async function StuntingReductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
