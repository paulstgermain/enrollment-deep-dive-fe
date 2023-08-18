"use client"
import { useState } from 'react'
import BarGraph from "@/components/graphs/Bar/BarGraph"
import LineGraph from "@/components/graphs/Line/LineGraph"
import PieGraph from "@/components/graphs/Pie/PieGraph"
import ScatterGraph from "@/components/graphs/Scatter/ScatterGraph"
import DataGrid from "@/components/graphs/Table/Table"
import { useData } from '@/context/dataContext'
import Login from '@/components/login/Login'
import { isAuthenticated } from '@/auth/basicAuth'

export default function Home() {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");

  const { state } = useData()
  //check if authenticated
  //if not, redirect to /login
  return (
    <main style={{backgroundColor: 'white!important'}}>
      {/* Conditional rendering to determine if the user is logged in or not
        - if user is authenticated, show landing page
        - if user is NOT authenticated, show login
      */}
      { isAuthenticatedState ? (
        <div>
          {state.tabNum === 0 && <DataGrid />}
          {state.tabNum === 1 && <BarGraph />}
          {state.tabNum === 2 && <LineGraph />}
          {state.tabNum === 3 && <PieGraph />}
          {state.tabNum === 4 && <ScatterGraph />}
        </div>
      ) : (
        <Login
        setIsAuthenticatedState={setIsAuthenticatedState}
        keyPhrase={keyPhrase}
        setKeyPhrase={setKeyPhrase}
        />
      )

      }
    </main>
  )
}
