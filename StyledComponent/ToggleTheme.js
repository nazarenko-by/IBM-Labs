import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import { View, ScrollView, Image } from 'react-native';

const lightTheme = {
    colors: {
        background: '#ffffff',
        buttonBackground: '#000000',
        buttonText: '#ffffff',
        text: '#000000',
    },
};

const darkTheme = {
    colors: {
        background: '#282828',
        buttonBackground: '#FF6347',
        buttonText: '#282828',
        text: '#FFD700',
    },
  };

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Container>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}> 
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}> {/* Add marginTop to avoid first heading being cut off */}
                    <StyledText>Pet Care Guide</StyledText>
                </View>
                <View testID='catCareTips'>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={{ width: '100%', height: 400 }}
                    />
                    <ContentSection>
                        <SectionTitle>Cat Care Tips using testId</SectionTitle>
                        <ContentText>
                            - Litter Box Hygiene: Keep the litter box clean by scooping daily and changing the litter frequently.{'\n'}
                            - Scratching Posts: Provide scratching posts to prevent furniture damage.{'\n'}
                            - Grooming: Regularly brush your cat to reduce shedding and prevent hairballs.{'\n'}
                            - Safe Spaces: Give cats cozy, quiet spots to relax.{'\n'}
                            - Playtime: Use interactive toys to keep them mentally stimulated.
                        </ContentText>
                    </ContentSection>
                </View>
                <View testID='dogCareTips'>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={{ width: '100%', height: 400 }}
                    />
                    <ContentSection>
                        <SectionTitle>Tips for dog care</SectionTitle>
                        <ContentText>
                            - Daily physical activity: Take your dog for a walk every day and engage in activities such as agility.{'\n'}
                            - Dental care: Brush your dog's teeth and offer dental treats.{'\n'}
                            - Training: Start teaching commands like “sit” and “stay” from an early age.{'\n'}
                            - Grooming regimen: Bathing, brushing, and nail trimming are a must.{'\n'}
                            - Socialization: Introduce dogs to different environments and people.
                        </ContentText>
                    </ContentSection>
                </View>
                <View testID='rabbitCareTips'>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: '100%', height: 400 }} />
                    <ContentSection>
                        <SectionTitle>Tips for caring for rabbits</SectionTitle>
                        <ContentText>
                            - Diet: Provide quality hay, fresh vegetables and pellets.{'\n'}
                            - Physical Activity: Let rabbits out of their cage for supervision during playtime.{'\n'}
                            - Housing: Keep the cage clean with soft, absorbent bedding.{'\n'}
                            - Grooming: Brush regularly to prevent hair buildup.{'\n'}
                            - Social Interaction: Spend time playing and socializing with your rabbit.
                        </ContentText>
                    </ContentSection>
                </View>
                <View testID='fishCareTips'>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1643563459751-3f3584476de9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: '100%', height: 400 }} />
                    <ContentSection>
                        <SectionTitle>Tips for caring for fish</SectionTitle>
                        <ContentText>
                            - Aquarium maintenance: Clean the aquarium regularly and maintain proper filtration.{'\n'}
                            - Proper feeding: Feed small portions once or twice a day.{'\n'}
                            - Aquarium size: Make sure your aquarium is big enough for your fish.{'\n'}
                            - Temperature control: Use a heater or thermometer to maintain the correct water temperature.{'\n'}
                            - Decor: Add shelters and decorations to enrich their environment.
                        </ContentText>
                    </ContentSection>
                </View>
                <View testID='birdCareTips'>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1681213641575-9d26b366fe21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: '100%', height: 400 }} />
                    <ContentSection>
                        <SectionTitle>Tips for caring for birds</SectionTitle>
                        <ContentText>
                            - Cage cleanliness: Clean the bottom of the cage and food dishes daily.{'\n'}
                            - Proper nutrition: Offer pellets, fruits, vegetables, and seeds in moderation.{'\n'}
                            - Social interaction: Spend time socializing and playing with your bird.{'\n'}
                            - Physical activity and flight: Allow time outside the cage for safe flight.{'\n'}
                            - Mental Stimulation: Provide toys and puzzles to keep them active.Bird Care Tips
                        </ContentText>
                    </ContentSection>
                </View>
            </ScrollView>
            <StyledButton onPress={changeTheme}>
                <ButtonText>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</ButtonText>
            </StyledButton>
        </Container>
    </ThemeProvider>
  );
};

// Styled components
const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};

`;

const SectionTitle = styled.Text`
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
`;

const ContentSection = styled.View`
    margin-bottom: 20px;
    padding: 10px;
`;

const ContentText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
`;

const StyledText = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    margin-bottom: 20px;
    font-style:italic;
    font-weight: bold;
`;

const StyledButton = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.buttonBackground};
    padding: 10px 20px;
    border-radius: 5px;
    align-items: center;
    margin-top: 10px;
`;

const ButtonText = styled.Text`
    color: ${(props) => props.theme.colors.buttonText};
    font-size: 23px;
    font-weight: bold;
`;

export default ToggleTheme;
