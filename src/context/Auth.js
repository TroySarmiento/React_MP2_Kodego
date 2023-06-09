import { useContext, createContext, useState, useEffect } from "react"
import { supabase } from '../supabase'

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const session = supabase.auth.session

        setUser(session?.user ?? null)

        supabase.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
        }).unsubscribe()
    }, [])

    const value = {
        signUp: (data) => supabase.auth.signUp(data),
        signIn: (data) => supabase.auth.signInWithPassword(data),
        signOut: () => supabase.auth.signOut(),
        user,
    }
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
