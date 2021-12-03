import React, { useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList,
}   from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [gretting, setGretting] = useState('')

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldSkill => [...oldSkill, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if(currentHour < 12) {
      setGretting('Good morning')
    } else if(currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good night')
    }


  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Davi</Text>
      <Text style={styles.grettings}>{gretting}</Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

      { mySkills.length > 0 ? (
        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              onPress={() => handleRemoveSkill(item.id)} 
              skill={item.name}
            />
          )}
        />
      ) : (
        <Text style={styles.notSkills}>Please, add new skills</Text>
      )}

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },

  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 16,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  grettings: {
    color: "#fff",
    fontSize: 16,
  },

  notSkills: {
    color: "#fff",
    fontSize: 16,
    alignSelf: 'center',
  }
})