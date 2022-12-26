import {
    GradientBackground,
    MainPlaylistTitleBox,
    TitleBackground,
    UneditStyledImageBox,
} from 'src/pages/CreatePlaylistPage/style'
import { LikedSongsPageInfo } from './LikedSongsPageInfo'

export const LikedSongsPageHeader = () => {
    return (
        <TitleBackground
            style={{
                backgroundColor: 'rgb(80, 56, 160)',
            }}
        >
            <GradientBackground>
                <MainPlaylistTitleBox>
                    <UneditStyledImageBox>
                        <img
                            src='https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'
                            alt='liked_songs'
                            style={{ width: '100%', height: '100%' }}
                        />
                    </UneditStyledImageBox>
                    <LikedSongsPageInfo />
                </MainPlaylistTitleBox>
            </GradientBackground>
        </TitleBackground>
    )
}
