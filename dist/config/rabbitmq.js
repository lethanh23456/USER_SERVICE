import amql from 'amqplib';
let channel;
export const connectRabbitMQ = async () => {
    try {
        const connection = await amql.connect({
            protocol: 'amqp',
            hostname: 'localhost',
            port: 5672,
            username: 'guest',
            password: 'guest',
        });
        channel = await connection.createChannel();
        console.log('Connected to RabbitMQ successfully');
    }
    catch (error) {
        console.error('Failed to connect to RabbitMQ:', error);
        throw error;
    }
};
export const publishToQueue = async (queueName, message) => {
    if (!channel) {
        throw new Error('RabbitMQ channel is not initialized. Call connectRabbitMQ first.');
    }
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });
};
//# sourceMappingURL=rabbitmq.js.map