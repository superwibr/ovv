const SEA = Gun.SEA;
const gun = Gun();
const ovv = gun.get("ovv");
const rooms = ovv.get("rooms_gods1");

// Generate a random username for testing purposes
const username = "user_" + Math.floor(Math.random() * 10 ** 10);

// Generate a random key pair for signing messages
const pair = await SEA.pair();

// Function to create a new chat room
const createRoom = async (roomName) => {
    const roomKey = await SEA.work(roomName, pair); // Derive a key from the room name
    return rooms.get(roomKey).put({
        name: roomName,
        created_by: username
    });
};

// Function to send a message to a room
const sendMessage = async (roomName, message) => {
    const roomKey = await SEA.work(roomName, pair); // Derive the key for the room
    const messageId = SEA.random(12);
    const signature = await SEA.sign(messageId, pair); // Sign the message ID with the user's key pair
    return rooms.get(roomKey).get("messages").set({
        id: messageId,
        sender: username,
        message,
        signature
    });
};

// Function to get all messages in a room
const getMessages = async (roomName) => {
    const roomKey = await SEA.work(roomName, pair); // Derive the key for the room
    const messages = [];
    rooms.get(roomKey).get("messages").map(async message => {
        const verified = !!await SEA.verify(message.signature, pair.pub); // Verify message signatures
        if (verified) messages.push(message);
    });
    return messages;
};

//
// example malicious actor
//

await createRoom("test_room");
await sendMessage("test_room", "this is a normal message");

rooms.get(await SEA.work("test_room", pair)).get("messages").set({ message: "*evil laughter*" });

await getMessages("test_room");