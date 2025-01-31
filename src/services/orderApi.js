import supabase from './supabase'

export const getOrders = async(userId) => {
    let { data, error } = await supabase
      .from('orders')
        .select('id')
        .eq('user_id', userId)
    
    if(error) throw new Error('Error fetching orders')
    
    return data

}

export const createOrder = async () => {
    
}
