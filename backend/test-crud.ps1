$ErrorActionPreference = 'Stop'
$base = 'http://localhost:5000/api/students'
$roll = 'TEST' + (Get-Random -Minimum 10000 -Maximum 99999)
$body = @{
  studentName = 'Test Student'
  rollNumber = $roll
  department = 'Information Technology'
  email = "$roll@example.com"
  technicalSkills = @('React', 'Node.js', 'MongoDB')
  aptitudeScore = 80
  communicationSkills = 'Good'
  placementReadiness = 'Ready'
} | ConvertTo-Json

Write-Host '1. CREATE'
$created = Invoke-RestMethod -Method Post -Uri $base -ContentType 'application/json' -Body $body
$id = $created.data._id
$created | ConvertTo-Json -Depth 8

Write-Host '2. READ'
Invoke-RestMethod -Method Get -Uri "$base/$id" | ConvertTo-Json -Depth 8

Write-Host '3. UPDATE'
$update = @{ aptitudeScore = 91; placementReadiness = 'In Progress' } | ConvertTo-Json
Invoke-RestMethod -Method Put -Uri "$base/$id" -ContentType 'application/json' -Body $update | ConvertTo-Json -Depth 8

Write-Host '4. DELETE'
Invoke-RestMethod -Method Delete -Uri "$base/$id" | ConvertTo-Json -Depth 8
Write-Host 'CRUD test completed. Check MongoDB Atlas/Compass and the backend terminal.'
