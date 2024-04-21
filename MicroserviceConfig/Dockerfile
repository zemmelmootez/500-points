FROM debezium/connect:1.4

# Copy Confluent Hub CLI tool
COPY confluent-hub /usr/local/bin/confluent-hub

# Make the Confluent Hub CLI tool executable
RUN chmod +x /usr/local/bin/confluent-hub

# Install PostgreSQL connector
RUN /usr/local/bin/confluent-hub install --no-prompt debezium/debezium-connector-postgresql:1.4.0
