import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <PowerBIEmbed
              embedConfig = {{
                  type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                  id: '0a7acef4-a203-4816-a090-451ad8ff7ee1',
                  embedUrl: "https://app.powerbi.com/reportEmbed?reportId=0a7acef4-a203-4816-a090-451ad8ff7ee1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUFVU1RSQUxJQS1FQVNULUEtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d",
                  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDQ3NDk1YjAtNTg1NS00MDRmLWE0Y2YtMDU2ODlkYmVlYjIxLyIsImlhdCI6MTY2NTcyODcwOSwibmJmIjoxNjY1NzI4NzA5LCJleHAiOjE2NjU3MzI5ODcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFCS1VBNmFJVWg0UmZJMDBma0c2YllXVERueklxeEltNllNMmU1V0NsMllIS1RhUDdQWFk0d3VxY1UyNmtjOU96MExLTHEySXY0amtXSEhraEo3STVHNUNWcjR3NEtLZ0ZKelkrd0dOaW11ST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNdXRodXJhaiIsImdpdmVuX25hbWUiOiJFdmFuamFsaW4iLCJpcGFkZHIiOiIxMDMuMjI0LjM1LjEwMSIsIm5hbWUiOiJFdmFuamFsaW4gTXV0aHVyYWoiLCJvaWQiOiIzZTA1MjBhZC1iNDFjLTRhNzYtYTBjYi00MjFiZDIxYjBhNzciLCJwdWlkIjoiMTAwMzIwMDE5RUQ1QUQ4RSIsInJoIjoiMC5BVUlBc0pWMDFGVllUMENrendWb25iN3JJUWtBQUFBQUFBQUF3QUFBQUFBQUFBQkNBS0kuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQnN6cGIxaWthYUJPR01rcUZoN180WkRvR0ptMVh5ODVHeWQ5QUpuVGFBYyIsInRpZCI6ImQ0NzQ5NWIwLTU4NTUtNDA0Zi1hNGNmLTA1Njg5ZGJlZWIyMSIsInVuaXF1ZV9uYW1lIjoiVFcuZXZhbmphbGluQHRkbWdyb3d0aC5jb20iLCJ1cG4iOiJUVy5ldmFuamFsaW5AdGRtZ3Jvd3RoLmNvbSIsInV0aSI6Im5HeXV6TWxrTkVHX2s5MFlGS1VFQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.PIq7qzlRkNysakdK4rJeEe1IK59jxCLlS65iEObol_jZ3qO3mWL2rnJDWkJeawxqLDc4cuoAGbBsRIrBC5trPgFKcC8KqdPNZKDXFCkv0cbgAJJcddcJpZgZc9kcMJLqZ9HNjAaRkB9qoJ6ny8DywArMbI1SUEEzRDRFHGzJh4Q4D0OwF9k6gJa_FqIt-6QCytrmSygoajtN8Op5CmqRvqW8no9ViyqKUN-iSLri1uoRi6f_J12QRTZ_BTfgvBVjVX5i2IkCqTHJMWNzrgIYLwzsxQO45I7tR4a1KKRDznBwWJ4WtosD1dOcR7n2Ys7yonIDrhKf6TB59kcLqODo2Q',
                  tokenType: models.TokenType.Aad,
                  settings: {
                      panes: {
                          filters: {
                              expanded: false,
                              visible: false
                          }
                      },
                      background: models.BackgroundType.Transparent,
                  }
              }}

              eventHandlers = {
                  new Map([
                      ['loaded', function () {console.log('Report loaded');}],
                      ['rendered', function () {console.log('Report rendered');}],
                      ['error', function (event) {console.log(event.detail);}]
                  ])
              }

              cssClassName = { "report-style-class" }

              getEmbeddedComponent = { (embeddedReport) => {
                  window.report = embeddedReport;
              }}
          />
      </header>
    </div>
  );
}

export default App;
