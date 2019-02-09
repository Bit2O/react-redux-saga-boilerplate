const keycloakJSON = {
  "realm": "test_client_realm",
  "auth-server-url": "http://localhost:8080/auth",
  "ssl-required": "external",
  "resource": "test_client",
  "public-client": true,
  "confidential-port": 0
}

export default keycloakJSON