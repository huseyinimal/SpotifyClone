import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';
import { FlatList } from 'react-native-gesture-handler';

const AlbumScreen = ()=>{ 
    
    const route=useRoute();
    useEffect(() => {
    }, [])
    return(
<View>
    <FlatList
    data={albumDetails.song}
    renderItem={({item})=>     <SongListItem song={item} />}
    keyExtractor={(item)=> item.id}
    ListHeaderComponent={()=> <AlbumHeader album={albumDetails} />}
    />
</View>
    )
}
   


export default AlbumScreen;

