import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'EFB IFPRI Study',
  description: 'Interactive Touchscreen Exhibition',
};

export default async function StuntingReductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>{children}</>);
}
