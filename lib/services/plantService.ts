import { supabase } from '../supabase';

export const getPlants = async (userId: string) => {
  const { data, error } = await supabase
    .from('plants')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error(error.message);
  return data;
};

export const addPlant = async (
  userId: string,
  plantName: string,
  wateringFreq: number,
  notes?: string
) => {
  const { error } = await supabase.from('plants').insert({
    user_id: userId,
    plant_name: plantName,
    watering_freq: wateringFreq,
    last_watered: new Date().toISOString(),
    notes: notes || '',
  });

  if (error) throw new Error(error.message);
};