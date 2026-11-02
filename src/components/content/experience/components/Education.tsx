import { ImageProps, Stack, StyleProp, TitleOrder } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import { education } from '../data/education';
import ExperienceBlock from './ExperienceBlock';

interface EducationProps {
  roleTitleOrder?: TitleOrder;
  withPadding?: boolean;
  logoRadius?: ImageProps['radius'];
  logoSize?: StyleProp<number>;
}

export default function Education({
  logoRadius,
  logoSize,
  withPadding = true,
  roleTitleOrder = 3,
}: EducationProps) {
  return (
    <Stack gap="xl" p={withPadding ? { base: 'lg', lg: 'xl' } : 0}>
      <StaggerContainer>
        <Stack gap="md">
          {education.map((edu, index) => (
            <FadeInUp key={index}>
              <ExperienceBlock
                {...edu}
                logoRadius={logoRadius}
                logoSize={logoSize}
                roleTitleOrder={roleTitleOrder}
              />
            </FadeInUp>
          ))}
        </Stack>
      </StaggerContainer>
    </Stack>
  );
}
