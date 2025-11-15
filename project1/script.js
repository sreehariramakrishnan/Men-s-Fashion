// Color matching suggestions database
const colorMatches = {
    white: [
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐⭐', description: 'Classic and professional' },
        { pantColor: 'Black', pantHex: '#000000', rating: '⭐⭐⭐⭐⭐', description: 'Timeless elegance' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Smart casual look' },
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐', description: 'Fresh and modern' }
    ],
    lightblue: [
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐⭐', description: 'Perfect contrast' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Professional look' },
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐', description: 'Casual elegance' },
        { pantColor: 'White', pantHex: '#FFFFFF', rating: '⭐⭐⭐', description: 'Light and fresh' }
    ],
    navy: [
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐⭐', description: 'Excellent contrast' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Sophisticated look' },
        { pantColor: 'White', pantHex: '#FFFFFF', rating: '⭐⭐⭐⭐', description: 'Classic combination' },
        { pantColor: 'Olive Green', pantHex: '#808000', rating: '⭐⭐⭐⭐', description: 'Unique style' }
    ],
    black: [
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐⭐', description: 'Modern monochrome' },
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐', description: 'Bold contrast' },
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐', description: 'Deep and rich' },
        { pantColor: 'White', pantHex: '#FFFFFF', rating: '⭐⭐⭐', description: 'High contrast' }
    ],
    gray: [
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐⭐', description: 'Professional match' },
        { pantColor: 'Black', pantHex: '#000000', rating: '⭐⭐⭐⭐', description: 'Sleek combination' },
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐', description: 'Soft and elegant' },
        { pantColor: 'Maroon', pantHex: '#800000', rating: '⭐⭐⭐⭐', description: 'Rich contrast' }
    ],
    beige: [
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐⭐', description: 'Perfect pairing' },
        { pantColor: 'Maroon', pantHex: '#800000', rating: '⭐⭐⭐⭐', description: 'Warm combination' },
        { pantColor: 'Olive Green', pantHex: '#808000', rating: '⭐⭐⭐⭐', description: 'Earth tones' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Subtle elegance' }
    ],
    pink: [
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐⭐', description: 'Bold and stylish' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Soft contrast' },
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐', description: 'Gentle pairing' },
        { pantColor: 'White', pantHex: '#FFFFFF', rating: '⭐⭐⭐', description: 'Light and fresh' }
    ],
    maroon: [
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐⭐', description: 'Rich and elegant' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Sophisticated' },
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐', description: 'Deep tones' },
        { pantColor: 'Black', pantHex: '#000000', rating: '⭐⭐⭐', description: 'Bold statement' }
    ],
    olive: [
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐⭐', description: 'Natural harmony' },
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐', description: 'Unique style' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Earth tones' },
        { pantColor: 'Maroon', pantHex: '#800000', rating: '⭐⭐⭐', description: 'Bold combination' }
    ],
    burgundy: [
        { pantColor: 'Beige', pantHex: '#F5F5DC', rating: '⭐⭐⭐⭐⭐', description: 'Luxurious pairing' },
        { pantColor: 'Gray', pantHex: '#808080', rating: '⭐⭐⭐⭐', description: 'Elegant contrast' },
        { pantColor: 'Navy Blue', pantHex: '#000080', rating: '⭐⭐⭐⭐', description: 'Rich combination' },
        { pantColor: 'Black', pantHex: '#000000', rating: '⭐⭐⭐', description: 'Deep and bold' }
    ]
};

let selectedShirtColor = null;
let selectedPantColor = null;
let selectedPantColorName = null;

// Initialize color selection
document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            selectedShirtColor = this.dataset.color;
            const shirtColorName = this.dataset.name;
            
            // Show matching suggestions
            showSuggestions(selectedShirtColor, shirtColorName);
        });
    });
    
    // Set minimum date to today for delivery date
    const deliveryDateInput = document.getElementById('deliveryDate');
    if (deliveryDateInput) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDateInput.setAttribute('min', today);
    }
    
    // Handle form submission
    const orderForm = document.getElementById('orderFormElement');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmission);
    }
    
    // Handle edit form submission
    const editOrderForm = document.getElementById('editOrderForm');
    if (editOrderForm) {
        editOrderForm.addEventListener('submit', handleEditOrderSubmission);
    }
    
    // Handle payment method toggle
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            const upiSection = document.getElementById('upiSection');
            if (this.value === 'upi') {
                upiSection.style.display = 'block';
            } else {
                upiSection.style.display = 'none';
            }
        });
    });
    
    // Initialize view (default to customer view)
    showCustomerView();
});

function showSuggestions(shirtColor, shirtColorName) {
    const suggestionsSection = document.getElementById('suggestionsSection');
    const suggestionsGrid = document.getElementById('suggestionsGrid');
    
    if (!colorMatches[shirtColor]) {
        return;
    }
    
    suggestionsGrid.innerHTML = '';
    
    colorMatches[shirtColor].forEach(match => {
        const card = document.createElement('div');
        card.className = 'suggestion-card';
        card.dataset.pantColor = match.pantColor.toLowerCase().replace(' ', '');
        card.dataset.pantHex = match.pantHex;
        card.dataset.pantName = match.pantColor;
        
        // Get shirt color hex
        const shirtColorOption = document.querySelector(`[data-color="${shirtColor}"]`);
        const shirtHex = getComputedStyle(shirtColorOption.querySelector('.color-circle')).backgroundColor;
        
        card.innerHTML = `
            <div class="combination-preview">
                <div class="shirt-preview" style="background-color: ${getColorHex(shirtColor)};"></div>
                <div class="pant-preview" style="background-color: ${match.pantHex};"></div>
            </div>
            <div class="combination-title">${shirtColorName} + ${match.pantColor}</div>
            <div class="combination-rating">${match.rating}</div>
            <p style="color: #666; margin: 10px 0; font-size: 0.9em;">${match.description}</p>
            <button class="select-btn" onclick="selectCombination('${match.pantColor}', '${match.pantHex}', '${shirtColorName}')">
                Select This Combination
            </button>
        `;
        
        suggestionsGrid.appendChild(card);
    });
    
    suggestionsSection.style.display = 'block';
    suggestionsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getColorHex(colorName) {
    const colorMap = {
        'white': '#FFFFFF',
        'lightblue': '#ADD8E6',
        'navy': '#000080',
        'black': '#000000',
        'gray': '#808080',
        'beige': '#F5F5DC',
        'pink': '#FFC0CB',
        'maroon': '#800000',
        'olive': '#808000',
        'burgundy': '#800020'
    };
    return colorMap[colorName] || '#FFFFFF';
}

function selectCombination(pantColorName, pantHex, shirtColorName) {
    selectedPantColor = pantHex;
    selectedPantColorName = pantColorName;
    
    // Highlight selected card
    const cards = document.querySelectorAll('.suggestion-card');
    cards.forEach(card => {
        if (card.dataset.pantName === pantColorName) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    // Show order form
    const orderForm = document.getElementById('orderForm');
    const selectedShirtColorInput = document.getElementById('selectedShirtColor');
    const selectedPantColorInput = document.getElementById('selectedPantColor');
    
    if (selectedShirtColorInput) {
        selectedShirtColorInput.value = shirtColorName;
    }
    if (selectedPantColorInput) {
        selectedPantColorInput.value = pantColorName;
    }
    
    orderForm.style.display = 'block';
    orderForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// LocalStorage functions for CRUD operations
function getOrders() {
    const orders = localStorage.getItem('mensFashionsOrders');
    return orders ? JSON.parse(orders) : [];
}

function saveOrders(orders) {
    localStorage.setItem('mensFashionsOrders', JSON.stringify(orders));
}

function createOrder(orderData) {
    const orders = getOrders();
    const newOrder = {
        id: Date.now().toString(),
        ...orderData,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    saveOrders(orders);
    return newOrder;
}

function updateOrder(orderId, updatedData) {
    const orders = getOrders();
    const index = orders.findIndex(order => order.id === orderId);
    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedData };
        saveOrders(orders);
        return orders[index];
    }
    return null;
}

function deleteOrder(orderId) {
    const orders = getOrders();
    const filteredOrders = orders.filter(order => order.id !== orderId);
    saveOrders(filteredOrders);
    return filteredOrders;
}

function handleOrderSubmission(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        branch: document.getElementById('branch').value,
        customerName: document.getElementById('customerName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        shirtSize: document.getElementById('shirtSize').value,
        pantSize: document.getElementById('pantSize').value,
        shirtColor: document.getElementById('selectedShirtColor').value,
        pantColor: document.getElementById('selectedPantColor').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        address: document.getElementById('address').value,
        notes: document.getElementById('notes').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
    };
    
    // Create order using CRUD function
    const newOrder = createOrder(formData);
    
    // Show success message
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('suggestionsSection').style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('orderSuccess').scrollIntoView({ behavior: 'smooth' });
    
    alert(`Order placed successfully!\n\nOrder ID: ${newOrder.id}\nWe'll contact you at ${formData.phone} to confirm your order.\n\nOrder Details:\n- Shirt: ${formData.shirtColor} (Size: ${formData.shirtSize})\n- Pant: ${formData.pantColor} (Size: ${formData.pantSize})\n- Delivery Date: ${formData.deliveryDate}`);
}

function resetOrder() {
    // Reset form
    document.getElementById('orderFormElement').reset();
    
    // Hide sections
    document.getElementById('orderSuccess').style.display = 'none';
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('suggestionsSection').style.display = 'none';
    
    // Reset selections
    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.suggestion-card').forEach(card => card.classList.remove('selected'));
    
    selectedShirtColor = null;
    selectedPantColor = null;
    selectedPantColorName = null;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// View Management Functions
function showCustomerView() {
    // Hide admin panel
    document.getElementById('adminPanel').style.display = 'none';
    
    // Show customer sections
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.color-selection').style.display = 'block';
    
    // Update nav buttons
    document.getElementById('customerViewBtn').classList.add('active');
    document.getElementById('adminViewBtn').classList.remove('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAdminView() {
    // Hide customer sections
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.color-selection').style.display = 'none';
    document.getElementById('suggestionsSection').style.display = 'none';
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'none';
    
    // Show admin panel
    document.getElementById('adminPanel').style.display = 'block';
    
    // Update nav buttons
    document.getElementById('adminViewBtn').classList.add('active');
    document.getElementById('customerViewBtn').classList.remove('active');
    
    // Load and display orders
    loadOrders();
    
    // Scroll to admin panel
    document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth' });
}

// Admin Panel Functions
function loadOrders() {
    const orders = getOrders();
    const tbody = document.getElementById('ordersTableBody');
    const noOrders = document.getElementById('noOrders');
    
    if (orders.length === 0) {
        tbody.innerHTML = '';
        document.getElementById('ordersTable').style.display = 'none';
        noOrders.style.display = 'block';
        updateStats(orders);
        return;
    }
    
    document.getElementById('ordersTable').style.display = 'table';
    noOrders.style.display = 'none';
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>#${order.id.slice(-6)}</td>
            <td>${formatBranch(order.branch || 'main')}</td>
            <td>${order.customerName}</td>
            <td>${order.phone}</td>
            <td>${order.email || 'N/A'}</td>
            <td>${order.shirtColor} (${order.shirtSize})</td>
            <td>${order.pantColor} (${order.pantSize})</td>
            <td>${formatDate(order.deliveryDate)}</td>
            <td><span class="status-badge status-${order.status}">${formatStatus(order.status)}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editOrder('${order.id}')">Edit</button>
                    <button class="btn-delete" onclick="deleteOrderConfirm('${order.id}')">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
    
    updateStats(orders);
}

function updateStats(orders) {
    document.getElementById('totalOrders').textContent = orders.length;
    const pendingCount = orders.filter(o => o.status === 'pending').length;
    document.getElementById('pendingOrders').textContent = pendingCount;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatStatus(status) {
    const statusMap = {
        'pending': 'Pending',
        'in-progress': 'In Progress',
        'completed': 'Completed',
        'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
}

function filterOrders() {
    const searchTerm = document.getElementById('searchOrders').value.toLowerCase();
    const orders = getOrders();
    const filteredOrders = orders.filter(order => 
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.phone.includes(searchTerm) ||
        (order.email && order.email.toLowerCase().includes(searchTerm))
    );
    
    const tbody = document.getElementById('ordersTableBody');
    const noOrders = document.getElementById('noOrders');
    
    if (filteredOrders.length === 0 && searchTerm) {
        tbody.innerHTML = '';
        document.getElementById('ordersTable').style.display = 'none';
        noOrders.style.display = 'block';
        noOrders.innerHTML = '<p>No orders found matching your search.</p>';
        return;
    }
    
    document.getElementById('ordersTable').style.display = 'table';
    noOrders.style.display = 'none';
    
    tbody.innerHTML = filteredOrders.map(order => `
        <tr>
            <td>#${order.id.slice(-6)}</td>
            <td>${formatBranch(order.branch || 'main')}</td>
            <td>${order.customerName}</td>
            <td>${order.phone}</td>
            <td>${order.email || 'N/A'}</td>
            <td>${order.shirtColor} (${order.shirtSize})</td>
            <td>${order.pantColor} (${order.pantSize})</td>
            <td>${formatDate(order.deliveryDate)}</td>
            <td><span class="status-badge status-${order.status}">${formatStatus(order.status)}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editOrder('${order.id}')">Edit</button>
                    <button class="btn-delete" onclick="deleteOrderConfirm('${order.id}')">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function formatBranch(branch) {
    const branchMap = {
        'main': 'Main Branch',
        'branch1': 'Branch 1',
        'branch2': 'Branch 2',
        'branch3': 'Branch 3'
    };
    return branchMap[branch] || branch;
}

// Edit Order Functions
function editOrder(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        alert('Order not found!');
        return;
    }
    
    // Populate edit form
    document.getElementById('editOrderId').value = order.id;
    document.getElementById('editCustomerName').value = order.customerName;
    document.getElementById('editPhone').value = order.phone;
    document.getElementById('editEmail').value = order.email || '';
    document.getElementById('editBranch').value = order.branch || 'main';
    document.getElementById('editShirtSize').value = order.shirtSize;
    document.getElementById('editPantSize').value = order.pantSize;
    document.getElementById('editShirtColor').value = order.shirtColor;
    document.getElementById('editPantColor').value = order.pantColor;
    document.getElementById('editDeliveryDate').value = order.deliveryDate;
    document.getElementById('editAddress').value = order.address;
    document.getElementById('editNotes').value = order.notes || '';
    document.getElementById('editStatus').value = order.status;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('editDeliveryDate').setAttribute('min', today);
    
    // Show modal
    document.getElementById('editOrderModal').style.display = 'block';
}

function closeEditModal() {
    document.getElementById('editOrderModal').style.display = 'none';
    document.getElementById('editOrderForm').reset();
}

function handleEditOrderSubmission(e) {
    e.preventDefault();
    
    const orderId = document.getElementById('editOrderId').value;
    const updatedData = {
        branch: document.getElementById('editBranch').value,
        customerName: document.getElementById('editCustomerName').value,
        phone: document.getElementById('editPhone').value,
        email: document.getElementById('editEmail').value,
        shirtSize: document.getElementById('editShirtSize').value,
        pantSize: document.getElementById('editPantSize').value,
        deliveryDate: document.getElementById('editDeliveryDate').value,
        address: document.getElementById('editAddress').value,
        notes: document.getElementById('editNotes').value,
        status: document.getElementById('editStatus').value
    };
    
    const updatedOrder = updateOrder(orderId, updatedData);
    
    if (updatedOrder) {
        alert('Order updated successfully!');
        closeEditModal();
        loadOrders(); // Refresh the orders table
    } else {
        alert('Error updating order. Please try again.');
    }
}

// Delete Order Functions
function deleteOrderConfirm(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        alert('Order not found!');
        return;
    }
    
    if (confirm(`Are you sure you want to delete order #${orderId.slice(-6)} for ${order.customerName}?\n\nThis action cannot be undone.`)) {
        deleteOrder(orderId);
        alert('Order deleted successfully!');
        loadOrders(); // Refresh the orders table
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('editOrderModal');
    if (event.target === modal) {
        closeEditModal();
    }
}

