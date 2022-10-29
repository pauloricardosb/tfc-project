const createMatch = {
  "homeTeam": 16, 
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const equalMatch = {
  "homeTeam": 16, 
  "awayTeam": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const invalidTeam = {
  "homeTeam": 16, 
  "awayTeam": 1000,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY2ODk1ODU1LCJleHAiOjE2Njc1MDA2NTV9.LnfPRy0d4-7Ty5fECmRACuZMCk-10hQW23n426NwrA4'

export { equalMatch , createMatch, invalidTeam, token };