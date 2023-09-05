"use client"
import { useState } from 'react'
import BarGraph from "@/app/components/graphs/Bar/BarGraph"
import ChecklistAnalysis from '@/app/components/checklistAnalysis/ChecklistAnalysis'
import LineGraph from "@/app/components/graphs/Line/LineGraph"
import PieGraph from "@/app/components/graphs/Pie/PieGraph"
import ScatterGraph from "@/app/components/graphs/Scatter/ScatterGraph"
import DataGrid from "@/app/components/graphs/Table/Table"
import Landing from '@/app/components/landing/Landing'
import { useData } from '@/context/dataContext'
import Login from '@/app/components/login/Login'
import { isAuthenticated } from '@/auth/basicAuth'

export default function Home() {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");

  const { state } = useData()

  return (
    <main style={{backgroundColor: 'white!important'}}>
      { isAuthenticatedState ? (
        <div>
          {state.tabNum === 0 && <Landing />}
          {state.tabNum === 1 && <DataGrid />}
          {state.tabNum === 2 && <ChecklistAnalysis />}
          {/* {state.tabNum === 3 && <LineGraph />}
          {state.tabNum === 4 && <PieGraph />}
          {state.tabNum === 5 && <ScatterGraph />} */}
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
